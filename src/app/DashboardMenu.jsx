import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../components/ui/dropdown-menu";
import {
  Calendar,
  PieChart,
  BookOpen,
  Trophy,
  Mail,
  Cloud,
  FunctionSquare,
  Book,
  Users,
  List,
} from "lucide-react";
import { Button } from "../components/ui/button";

export default function DashboardMenu() {
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full flex items-center gap-2 text-white text-base font-medium px-4 py-2">
          <span>Resources</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#232329] border border-white/10 text-white w-56 mt-2">
        <DropdownMenuItem className="flex items-center gap-3 py-2 px-4 hover:bg-white/10 cursor-pointer">
          <Calendar className="size-5" /> Earnings
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-2 px-4 hover:bg-white/10 cursor-pointer">
          <PieChart className="size-5" /> ETFs
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-2 px-4 hover:bg-white/10 cursor-pointer">
          <BookOpen className="size-5" /> Investor Holdings
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-2 px-4 hover:bg-white/10 cursor-pointer">
          <Trophy className="size-5" /> Super Investors
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-2 px-4 hover:bg-white/10 cursor-pointer">
          <Mail className="size-5" /> Hedge Fund Letters
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-2 px-4 hover:bg-white/10 cursor-pointer">
          <Cloud className="size-5" /> API
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-2 px-4 hover:bg-white/10 cursor-pointer">
          <FunctionSquare className="size-5" /> Formulas
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-2 px-4 hover:bg-white/10 cursor-pointer">
          <Book className="size-5" /> Blog
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-2 px-4 hover:bg-white/10 cursor-pointer">
          <Users className="size-5" /> Insider Trades
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 py-2 px-4 hover:bg-white/10 cursor-pointer">
          <List className="size-5" /> Stock Lists
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 