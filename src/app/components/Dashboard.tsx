"use client";

import React from "react";
import useSWR from "swr";
import { fetchAds } from "../services/adService";
import AdList from "./AdList";
import { Ad } from "../types/ad";

const Dashboard: React.FC = () => {
  const { data: ads, error } = useSWR<Ad[]>("/api/ads", fetchAds);

  if (error) return <div>Error loading ads.</div>;
  if (!ads) return <div>Loading...</div>;

  const today = new Date().toLocaleDateString();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ads Scheduled for Today</h1>
      <p className="mb-2">Date: {today}</p>
      <h2 className="text-xl mb-4">Total Ads: {ads.length}</h2>

      <AdList ads={ads} />
    </div>
  );
};

export default Dashboard;
