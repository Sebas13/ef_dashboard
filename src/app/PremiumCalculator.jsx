import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../components/ui/select";
import { ScrollArea } from "../components/ui/scroll-area";

// List of countries in English, alphabetically sorted
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const qualityOptions = ["Standard", "Low", "High"];

export default function PremiumCalculator() {
  const [country, setCountry] = useState("");
  const [construction, setConstruction] = useState("");
  const [repayment, setRepayment] = useState("");
  const [political, setPolitical] = useState("");
  const [commercial, setCommercial] = useState("");
  const [quality, setQuality] = useState("");
  const [error, setError] = useState("");

  // Validation helpers
  const isFloat1 = (val) => /^\d{1,2}(\.\d)?$/.test(val);
  const isPercent = (val) => /^\d{1,3}(\.\d{1,2})?$/.test(val) && Number(val) >= 0 && Number(val) <= 100;

  // Helpers for percent input display
  const formatPercent = (val) => val !== "" ? `${val.replace(/%$/, "")}%` : "";
  const parsePercent = (val) => val.replace(/[^\d.]/g, "").slice(0, 6);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (
      !country ||
      !isFloat1(construction) ||
      !isFloat1(repayment) ||
      !isPercent(political) ||
      !isPercent(commercial) ||
      !quality
    ) {
      setError("Please populate all fields");
      return;
    }
    setError("");
    // Calculation logic will go here
  };

  return (
    <form
      className="bg-[#18181b] border border-white/30 rounded-2xl p-6 w-full max-w-md mx-auto flex flex-col gap-4 shadow-lg"
      onSubmit={handleCalculate}
    >
      <h2 className="text-xl mb-2 text-white">OECD Premium Calculator</h2>
      {/* Country */}
      <div className="flex items-center gap-2">
        <label className="w-40 text-white">Country</label>
        <Select value={country} onValueChange={setCountry}>
          <SelectTrigger className="flex-1 bg-[#232329] border border-white/20 text-white text-center justify-center">
            <SelectValue placeholder="Select country" className="text-center" />
          </SelectTrigger>
          <SelectContent className="max-h-40">
            <ScrollArea className="h-40 w-full">
              {countries.map((c) => (
                <SelectItem key={c} value={c} className="text-white">
                  {c}
                </SelectItem>
              ))}
            </ScrollArea>
          </SelectContent>
        </Select>
      </div>
      {/* Construction Period */}
      <div className="flex items-center gap-2">
        <label className="w-40 text-white">Construction Period</label>
        <Input
          className="flex-1 bg-[#232329] border border-white/20 text-white text-center"
          type="text"
          inputMode="decimal"
          pattern="\d{1,2}(\.\d)?"
          placeholder="years"
          value={construction}
          onChange={e => setConstruction(e.target.value.replace(/[^\d.]/g, "").slice(0, 4))}
        />
      </div>
      {/* Repayment Period */}
      <div className="flex items-center gap-2">
        <label className="w-40 text-white">Repayment Period</label>
        <Input
          className="flex-1 bg-[#232329] border border-white/20 text-white text-center"
          type="text"
          inputMode="decimal"
          pattern="\d{1,2}(\.\d)?"
          placeholder="years"
          value={repayment}
          onChange={e => setRepayment(e.target.value.replace(/[^\d.]/g, "").slice(0, 4))}
        />
      </div>
      {/* % cover political risk */}
      <div className="flex items-center gap-2">
        <label className="w-40 text-white">% cover political risk</label>
        <Input
          className="flex-1 bg-[#232329] border border-white/20 text-white text-center"
          type="text"
          inputMode="decimal"
          pattern="\d{1,3}(\.\d{1,2})?%?"
          placeholder="%"
          value={formatPercent(political)}
          onChange={e => setPolitical(parsePercent(e.target.value))}
          onFocus={e => {
            if (e.target.value.endsWith("%")) {
              e.target.value = e.target.value.slice(0, -1);
            }
          }}
          onBlur={e => {
            if (e.target.value && !e.target.value.endsWith("%")) {
              e.target.value = `${e.target.value}%`;
            }
          }}
        />
      </div>
      {/* % cover commercial risk */}
      <div className="flex items-center gap-2">
        <label className="w-40 text-white">% cover commercial risk</label>
        <Input
          className="flex-1 bg-[#232329] border border-white/20 text-white text-center"
          type="text"
          inputMode="decimal"
          pattern="\d{1,3}(\.\d{1,2})?%?"
          placeholder="%"
          value={formatPercent(commercial)}
          onChange={e => setCommercial(parsePercent(e.target.value))}
          onFocus={e => {
            if (e.target.value.endsWith("%")) {
              e.target.value = e.target.value.slice(0, -1);
            }
          }}
          onBlur={e => {
            if (e.target.value && !e.target.value.endsWith("%")) {
              e.target.value = `${e.target.value}%`;
            }
          }}
        />
      </div>
      {/* Quality of cover */}
      <div className="flex items-center gap-2">
        <label className="w-40 text-white">Quality of cover</label>
        <Select value={quality} onValueChange={setQuality}>
          <SelectTrigger className="flex-1 bg-[#232329] border border-white/20 text-white text-center justify-center">
            <SelectValue placeholder="Select quality" />
          </SelectTrigger>
          <SelectContent className="max-h-32">
            <ScrollArea className="h-32 w-full">
              {qualityOptions.map((q) => (
                <SelectItem key={q} value={q} className="text-white">
                  {q}
                </SelectItem>
              ))}
            </ScrollArea>
          </SelectContent>
        </Select>
      </div>
      {/* Calculate button */}
      <Button type="submit" className="w-full mt-2 bg-[#232329] border border-white/20 text-white text-lg font-mono hover:bg-white/10 transition">
        Calculate
      </Button>
      {error && <div className="text-red-400 text-center mt-2">{error}</div>}
    </form>
  );
} 