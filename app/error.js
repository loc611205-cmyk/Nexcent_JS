"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Lỗi ập đến rồi:", error);
  }, [error]);

  return (
    <div className="p-4 bg-red-100 text-red-700 rounded-lg">
      <h2>Ôi hỏng! Có lỗi xảy ra rồi.</h2>

      <p>{error.message}</p>

      <button
        onClick={() => reset()}
        className="mt-4 px-4s py-2 bg-red-500 text-white rounded"
      >
        Thử tải lại xem sao
      </button>
    </div>
  );
}
