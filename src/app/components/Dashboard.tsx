// components/Dashboard.tsx

import React from "react";

interface Ad {
  id: number;
  title: string;
  downloadLink: string;
}

const Dashboard: React.FC = () => {
  // Dummy data
  const ads: Ad[] = [
    { id: 1, title: "Summer Sale Promo", downloadLink: "#" },
    { id: 2, title: "New Product Launch", downloadLink: "#" },
    { id: 3, title: "Holiday Discount Offer", downloadLink: "#" },
  ];

  const today: string = new Date().toLocaleDateString();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ads Scheduled for Today</h1>
      <p className="mb-2">Date: {today}</p>
      <h2 className="text-xl mb-4">Total Ads: {ads.length}</h2>

      <table className="min-w-full bg-white border">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b text-left">Ad Title</th>
            <th className="py-2 px-4 border-b text-left">Download</th>
          </tr>
        </thead>
        <tbody>
          {ads.map((ad) => (
            <tr key={ad.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{ad.title}</td>
              <td className="py-2 px-4 border-b">
                <a
                  href={ad.downloadLink}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
