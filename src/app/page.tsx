"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@radix-ui/react-label";
import { Mail } from "lucide-react";

export default function Home() {
  const skills = [
    "Data Analysis & Market Research",
    "Music Consumer Behavior Insights",
    "Strategic Marketing & Trend Forecasting",
    "Audience Engagement & Social Listening",
    "Competitive Analysis",
    "Business Strategy",
  ];

  function handleRedirectLinkedin(): void {
    window.open("https://www.linkedin.com/in/tom-holloway-1993151bb/");
  }

  // function functionNewRamdom(): void {
  //   console.log("Hola soy una nueva funcion");
  // }

  return (
    <div className="min-h-screen bg-zinc-200 flex flex-col gap-4 items-center justify-center p-6 text-center">
      {/* Sección una */}
      <Card className="p-4 flex justify-center items-center flex-col">
        <Label className="font-bold text-2xl text-gray-900 mb-4">
          Consumer insights manager
        </Label>
        <img
          className=" rounded-full w-52 object-contain"
          src="./avatar.png"
          alt=""
        />
        <p className="text-lg text-gray-700 max-w-2xl m-6">
          Passionate about understanding music consumers through data analysis
          and market research. Expertise in identifying trends, improving
          marketing strategies, and enhancing customer experiences to drive
          growth in the music industry.
        </p>
      </Card>

      {/* Sección dos */}
      <Card className="p-4 flex justify-center items-center flex-col">
        <CardHeader className="text-2xl font-semibold text-gray-900 mb-4">
          Skills & Expertise
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <Badge key={index} variant="default" className="p-1 text-center">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant={"link"}
            // ir a una url externa
            onClick={() => handleRedirectLinkedin()}
            className="px-6 py-3 rounded-lg text-lg mt-6 hover:text-emerald-400"
          >
            Contact me
            <Mail className="w-6 h-6 ml-2" />
          </Button>

          {/* Botones para agregar nuevo */}
          {/* <Button
            variant={"link"}
            // ir a una url externa
            onClick={() => createfunction()}
            className="px-6 py-3 rounded-lg text-lg mt-6 hover:text-emerald-400"
          >
            Contact me
            <Mail className="w-6 h-6 ml-2" />
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
}
