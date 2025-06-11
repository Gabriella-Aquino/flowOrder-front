import { createClient } from "@/lib/axios";
import React, { useState } from "react";

export default function ClientForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const newClient = { name, email };
      await createClient(newClient);
      setSuccess("Cliente criado com sucesso!");
      setName("");
      setEmail("");
    } catch {
      setError("Erro ao criar cliente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[50vh]">
      <h2 className="text-2xl font-bold mb-5">Cadastrar Cliente</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
        <div className="flex gap-3">
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-1 border border-gray-400 rounded-l"
          />
        </div>
        <div className="flex gap-3">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-1 border border-gray-400 rounded-l"
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Criar Cliente"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>
    </div>
  );
}
