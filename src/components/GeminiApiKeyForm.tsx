
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { AlertCircle, Check } from 'lucide-react';

const GeminiApiKeyForm = () => {
  const [apiKey, setApiKey] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);

  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      toast.error('Please enter your Gemini API key');
      return;
    }

    setIsSaving(true);
    
    // In a real app, you would store this securely
    // For demo purposes, we're just going to simulate saving it
    setTimeout(() => {
      // Store in localStorage (not recommended for production)
      localStorage.setItem('gemini_api_key', apiKey);
      setHasApiKey(true);
      setIsSaving(false);
      toast.success('API key saved successfully!');
    }, 1000);
  };

  const handleRemoveApiKey = () => {
    localStorage.removeItem('gemini_api_key');
    setApiKey('');
    setHasApiKey(false);
    toast.success('API key removed successfully');
  };

  // Check for existing API key on component mount
  useState(() => {
    const savedApiKey = localStorage.getItem('gemini_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
      setHasApiKey(true);
    }
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gemini API Configuration</CardTitle>
        <CardDescription>
          Provide your Google Gemini API key to enable AI-powered learning roadmaps
        </CardDescription>
      </CardHeader>
      <CardContent>
        {hasApiKey ? (
          <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-sm text-green-700">Gemini API key is configured</span>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="apiKey">Gemini API Key</Label>
              <Input
                id="apiKey"
                type="password"
                placeholder="Enter your Gemini API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-md">
              <AlertCircle className="h-5 w-5 text-amber-500" />
              <span className="text-sm text-amber-700">
                To get a Gemini API key, visit the 
                <a 
                  href="https://ai.google.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline ml-1"
                >
                  Google AI Studio
                </a>
              </span>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {hasApiKey ? (
          <Button variant="destructive" onClick={handleRemoveApiKey}>
            Remove API Key
          </Button>
        ) : (
          <Button onClick={handleSaveApiKey} disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save API Key'}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default GeminiApiKeyForm;
