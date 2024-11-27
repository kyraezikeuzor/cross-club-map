import React, { useState } from 'react';
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Search } from 'lucide-react'

export const SearchBar = ({ onSearch }:{onSearch:any}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
    <Input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e:any) => setSearchTerm(e.target.value)}
      className="flex-grow rounded-3xl border-[3px] border-[--clr-grey-light]"
    />
    <Button type="submit">
        Search <Search className='ml-1 w-4'/>
    </Button>
  </form>
  );
};

