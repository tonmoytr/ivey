"use client";

import FormModal from "./FormModal";
import { useState } from "react";

export default function ContactButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button className="bg-blue-400 px-3 py-1 hover:bg-black hover:border " onClick={() => setShowModal(true)}>Contact</button>

      <FormModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
