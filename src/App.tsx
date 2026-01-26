import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="dark">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:projectId" element={<ProjectDetail />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
