import { Smile } from "lucide-react";

const Blog = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <Smile className="w-16 h-16 mx-auto text-teal-custom mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Welcome to My Blog! 👋</h1>
            <p className="text-lg text-muted-foreground mb-6">
              I'm really excited to start writing blog posts! My first articles will be appearing here soon.
            </p>
            <p className="text-muted-foreground">
              I'm planning to write about mechatronics engineering, programming, technology, and other interesting topics. 
              Stay tuned, there will definitely be some exciting content coming your way! 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
