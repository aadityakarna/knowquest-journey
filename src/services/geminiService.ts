
// This file contains the integration with Google's Gemini API

type GeminiRequestParams = {
  technology: string;
  duration: string;
};

type Resource = {
  id: string;
  title: string;
  type: "video" | "article" | "tutorial";
  url: string;
  source: string;
};

export type RoadmapStep = {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  resources: Resource[];
};

export type RoadmapResponse = {
  roadmap: RoadmapStep[];
};

export async function generateRoadmap(params: GeminiRequestParams): Promise<RoadmapResponse> {
  const { technology, duration } = params;
  
  // For now, we'll simulate a response for development since the Gemini API key is not configured yet
  // Remove this mock and uncomment the actual implementation when adding the API key
  
  // This is a temporary mock response
  const mockRoadmap: RoadmapResponse = {
    roadmap: [
      {
        id: "step1",
        title: `${technology} Fundamentals`,
        description: `Learn the core concepts and basics of ${technology}.`,
        estimatedTime: "2 weeks",
        resources: [
          {
            id: "res1",
            title: `Introduction to ${technology}`,
            type: "video",
            url: "https://example.com/intro",
            source: "YouTube"
          },
          {
            id: "res2",
            title: `${technology} Crash Course`,
            type: "tutorial",
            url: "https://example.com/tutorial",
            source: "freeCodeCamp"
          }
        ]
      },
      {
        id: "step2",
        title: `Intermediate ${technology}`,
        description: `Build on your foundation with more advanced ${technology} concepts.`,
        estimatedTime: "3 weeks",
        resources: [
          {
            id: "res3",
            title: `Advanced ${technology} Techniques`,
            type: "article",
            url: "https://example.com/advanced",
            source: "Medium"
          },
          {
            id: "res4",
            title: `${technology} Project Tutorial`,
            type: "tutorial",
            url: "https://example.com/project",
            source: "Udemy"
          }
        ]
      },
      {
        id: "step3",
        title: `${technology} in Practice`,
        description: `Apply your knowledge by building real-world projects with ${technology}.`,
        estimatedTime: "4 weeks",
        resources: [
          {
            id: "res5",
            title: `Building Apps with ${technology}`,
            type: "video",
            url: "https://example.com/build",
            source: "YouTube"
          },
          {
            id: "res6",
            title: `${technology} Best Practices`,
            type: "article",
            url: "https://example.com/practices",
            source: "Dev.to"
          }
        ]
      }
    ]
  };
  
  // Uncomment this line if you want to simulate an error instead
  // throw new Error("Gemini API key not configured yet. This feature will be available soon.");
  
  // Return the mock response
  return mockRoadmap;
  
  // This code will be used when you add the API key later
  /* 
  const apiKey = "YOUR_API_KEY"; // You'll replace this with your actual API key later
  
  if (!apiKey) {
    throw new Error("Gemini API key not found. Please add your API key in the settings.");
  }
  
  const prompt = `
    Create a detailed learning roadmap for ${technology}. 
    The learner wants to master this technology in ${duration}.
    
    Provide a structured path with:
    1. Clear sequential steps from beginner to advanced
    2. For each step, include specific topics to cover
    3. For each step, recommend 2-3 high-quality learning resources (videos, articles, tutorials)
    4. Estimate how long each step might take within the ${duration} timeframe
    
    Format the response as JSON with the following structure:
    {
      "roadmap": [
        {
          "id": "unique-id",
          "title": "Step title",
          "description": "Detailed description of what to learn",
          "estimatedTime": "Time estimate for this step",
          "resources": [
            {
              "id": "resource-id",
              "title": "Resource title",
              "type": "video|article|tutorial",
              "url": "URL to the resource",
              "source": "Source name (e.g., YouTube, Medium)"
            }
          ]
        }
      ]
    }
  `;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API error:", errorData);
      throw new Error(`Gemini API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    
    // Extract the text from the response
    const generatedText = data.candidates[0]?.content?.parts[0]?.text;
    
    if (!generatedText) {
      throw new Error("No content generated from Gemini API");
    }
    
    // Extract the JSON part from the text (in case there's any additional text)
    const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
    
    if (!jsonMatch) {
      throw new Error("Could not parse JSON from Gemini response");
    }
    
    const roadmapData = JSON.parse(jsonMatch[0]) as RoadmapResponse;
    
    // Validate the response structure
    if (!roadmapData.roadmap || !Array.isArray(roadmapData.roadmap)) {
      throw new Error("Invalid roadmap data structure from Gemini API");
    }
    
    return roadmapData;
  } catch (error) {
    console.error("Error generating roadmap:", error);
    throw error;
  }
  */
}
