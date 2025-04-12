import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Smile, Download } from "lucide-react";

interface CVDownloadPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

const CVDownloadPopup = ({ isOpen, onClose, onDownload }: CVDownloadPopupProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send this data to your backend
    // For now, we'll just log it and proceed with download
    console.log({ name, email, message });
    
    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    onDownload();
    onClose();
    setIsSubmitting(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-background">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Smile className="w-6 h-6 text-teal-custom" />
            Hi there! 👋
          </DialogTitle>
          <DialogDescription className="text-base">
            I'd love to know a bit about you before you download my CV. This helps me understand who's interested in my work!
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Your Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What should I call you?"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Where can I reach you?"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Quick Message (Optional)
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What brings you here? 😊"
              className="min-h-[100px]"
            />
          </div>
          
          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Maybe Later
            </Button>
            <Button
              type="submit"
              className="bg-teal-custom hover:bg-teal-600 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Getting Ready..."
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CVDownloadPopup; 