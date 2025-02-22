import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Image, Pen, Volume2Icon } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="h-screen overflow-y-hidden">

      <div className="container mx-auto flex justify-between items-center">
        <div className="mt-10">
          <h2 className="font-bold text-2xl">Story <span className="text-green-600">Genie</span> </h2>
        </div>
        <div className="flex gap-3 mt-10">
          <Link href="/login">
            <Button className="text-white bg-green-600">Login</Button>
          </Link>
          <Link href="/signup">
            <Button className="text-white bg-green-600">Signup</Button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto mt-20 text-center p-10  rounded-lg ">
        <h2 className="font-bold text-6xl leading-tight">
          Bring your stories to life with AI, <br /> with the aid of <span className="text-green-600">Story Genie</span>
        </h2>
        <p className="mt-10 text-lg text-gray-700">Create, illustrate, and listen to your stories with AI magic.</p>
        <Link href="/signup" className="">
          <Button className="bg-green-600 mt-10">Get started</Button>
        </Link>
        <div className=" mt-10 flex flex-col justify-between items-center">
          <h2 className="text-2xl font-bold">
            Our <span className="text-green-600">features</span>
          </h2>
          <div className=" mt-10 flex w-full gap-4 justify-between items-center">
            <Card className="w-[400px]">
              <CardHeader className="">
                <CardTitle className="flex items-center justify-center gap-1"><Pen className="text-green-600 text-sm" /> Create your story </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Write Your Story and make it available to any one using story genie</p>
              </CardContent>
            </Card>
            <Card className="w-[400px]">
              <CardHeader className="">
                <CardTitle className="flex items-center justify-center gap-1"><Image className="text-green-600 text-sm" /> Generate Illustrations</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Generate Illustrations and make it available to any one using DALL·E 2</p>
              </CardContent>
            </Card>
            <Card className="w-[400px]">
              <CardHeader className="">
                <CardTitle className="flex items-center justify-center gap-1"><Volume2Icon className="text-green-600 text-sm" /> Listen to Your Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Listen to Your Story by use of voice overs by the magic of Ai</p>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
