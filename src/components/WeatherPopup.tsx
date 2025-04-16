import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface WeatherPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  content?: {
    type: string;
    value: string;
    alt?: string;
  }[];
}

export const WeatherPopup: React.FC<WeatherPopupProps> = ({
  isOpen,
  onClose,
  title,
  description,
  content = [],
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-lg">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          {content.map((item, index) => {
            switch (item.type) {
              case 'text':
                return (
                  <p key={index} className="text-gray-700 whitespace-pre-line">
                    {item.value}
                  </p>
                );
              case 'image':
                return (
                  <img
                    key={index}
                    src={item.value}
                    alt={item.alt || 'Weather station image'}
                    className="w-full rounded-lg shadow-md"
                  />
                );
              case 'video':
                return (
                  <div key={index} className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={item.value}
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}; 