import React from 'react';

function ResultCard({ result }) {
  return (
    <div className="border mb-1 border-gray-200 rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-medium hover:text-blue-500">
        <a href={result.url} target="_blank" rel="noreferrer"> {/* Added target and rel */}
          {result.title}
        </a>
      </h2>
      <p className="mt-2">{result.description}</p>
    </div>
  );
}

export default ResultCard;