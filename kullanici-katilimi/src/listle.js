import React from "react";

const Listele = (props) => {
  const { liste } = props;

  return (
    <div>
      {liste.map((listedMember) => (
        <p>{`Selam${listedMember.Name} Başarıyla kayıt oldun`}</p>
      ))}
    </div>
  );
};
