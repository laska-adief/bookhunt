"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeftSquare } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  const handleBackButton = () => {
    router.back();
  };
  return (
    <Button
      variant="outline"
      className="text-white bg-transparent border-white hover:bg-white/10 hover:text-white"
      onClick={handleBackButton}
    >
      <ArrowLeftSquare />
      <span>Back to List</span>
    </Button>
  );
};

export default BackButton;
