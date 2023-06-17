import TitleCard from "../../../components/Cards/TitleCard";

const userSourceData = [
  { source: "Ningsih Cans telah berhasil melakukan pendaftaran mentor", count: "21/05/2023" },
  { source: "Berliana telah berhasil melakukan pembayaran", count: "21/05/2023" },
  { source: "Rafie telah mendaftar sebagai mentee", count: "21/05/2023" },
  { source: "Aulia telah mengajukan cuti", count: "21/05/2023" },
  { source: "John Smith telah mengupload sesuatu di community", count: "21/05/2023" },
];

function UserChannels() {
  return (
    <TitleCard title={"Notifikasi"}>
      {/** Table Data */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <tbody>
            {userSourceData.map((u, k) => {
              return (
                <tr key={k}>
                  <th>{k + 1}</th>
                  <td>
                    {u.source}
                  </td>
                  <td>{u.count}</td>
                    <td>
                {u.icon} 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-2">
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
                </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </TitleCard>
  );
}

export default UserChannels;