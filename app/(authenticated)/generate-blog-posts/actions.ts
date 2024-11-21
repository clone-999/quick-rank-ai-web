"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";

const TEMPLATE = `
INSTRUCTIONS: 
  You are a skilled content writer that converts audio transcriptions into well-structured, engaging blog posts in Markdown format. Create a comprehensive blog post with a catchy title, introduction, main body with multiple sections, and a conclusion. Analyze the user's writing style from the posts and emulate the tone and style in the new post. Keep the tone casual and professional.
  
  Please convert the following transcription into a well-structured blog post using Markdown formatting. Follow this structure:
    1. Start with a SEO friendly catchy title on the first line.
    2. Add two newlines after the title.
    3. Write an engaging introduction paragraph.
    4. Create multiple sections for the main content, using appropriate headings (##, ###).
    5. Include relevant subheadings within sections if needed.
    6. Use bullet points or numbered lists where appropriate.
    7. Add a conclusion paragraph at the end.
    8. Ensure the content is informative, well-organized, and easy to read.
    9. Emulate my writing style, tone, and any recurring patterns you notice from my previous posts.

  Here's the transcription to convert: {text}
`;

async function generateBlogPost(content: string, template: string) {
  const prompt = PromptTemplate.fromTemplate(template);

  const model = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    modelName: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
    temperature: process.env.OPENAI_TEMPERATURE
    ? parseFloat(process.env.OPENAI_TEMPERATURE)
    : 0.7,
      maxTokens: process.env.OPENAI_MAX_TOKENS
    ? parseInt(process.env.OPENAI_MAX_TOKENS)
    : 4000,
  });

  console.log("THE MODEL", model);
  

  const outputParser = new StringOutputParser();
  const chain = prompt.pipe(model).pipe(outputParser);

  try {
    const blogPost = await chain.invoke({ text: content });
    console.log("Open AI LOG", blogPost);
    
    if (blogPost) {
      return {
        success: true,
        error: null,
        data: blogPost,
      };
    } else {
      return {
        success: false,
        error: "openai_issue",
        data: null,
      };
    }
    
  } catch (error) {
    console.log("ERROR GENERATE BLOG POST", error);
    
    return {
      success: false,
      error: "openai_issue",
      data: null,
    };
  }
}

export async function generateBlogPosts(
    videoId: string
){

  console.log("THE TRANSCRIPT ID", videoId);

  const user = await currentUser();

  console.log("CLERK USER", user);

  const userDB = await prisma.user.findFirst({
    where: {
      email: user?.primaryEmailAddress?.emailAddress,
    },
  });

  console.log("DATABASE USER", userDB);
  
  if (!userDB) {
    return {
      success: false,
      error: "user_not_found",
      data: null,
    }
  }

  const url = `https://deserving-harmony-9f5ca04daf.strapiapp.com/utilai/yt-transcript/${videoId}`;

  let transcriptData;

  try {
    const transcript = await fetch(url);
    console.log("THE TRANSCRIPT", transcript);
    transcriptData = await transcript.text();
    console.log("TRANSCRIPT DATA", transcriptData);
    
  } catch (error) {
    console.error("Error processing request TRANSCRIPT:", error);
    return {
      success: false,
      error: "failed_to_get_video_id",
      data: null,
    };
  }

  let blogPost: Awaited<ReturnType<typeof generateBlogPost>>;

  try {
    blogPost = await generateBlogPost(transcriptData, TEMPLATE);
    console.log("RETURNED BLOG POST", blogPost);
    
    if (blogPost.success) {
      return {
        success: true,
        error: null,
        data: {
          post: blogPost.data,
          user_id: userDB.id,
        },
      };
    } else {
      return {
        success: false,
        error: "openai_issue",
        data: null,
      };
    }
    
  } catch (error) {
    console.error("Error processing request returned BLOGPOST:", error);
    
    return {
      success: false,
      error: "openai_issue",
      data: null,
    };
  }

}