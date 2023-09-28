const InputsRelatorioHoras = () => {
  return (
    <>
      <tr className="text-center font-bold">
        <td className="border-b p-2">Dia</td>
        <td className="border p-2">Horas</td>
        <td className="border-y p-2">Horas possíveis</td>
      </tr>
      <tr>
        <td className="border-b p-2">
          <input
            type="number"
            min={1}
            max={31}
            className="text-center w-full bg-transparent outline-none"
          />
        </td>
        <td className="border p-2">
          <input
            type="number"
            min={4}
            max={8}
            className="text-center w-full bg-transparent outline-none"
          />
        </td>
        <td className="border-y p-2">
          <input
            type="number"
            min={4}
            max={8}
            className="text-center w-full bg-transparent outline-none"
          />
        </td>
      </tr>
    </>
  );
};

export default InputsRelatorioHoras;
