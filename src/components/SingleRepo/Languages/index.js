import React, { useEffect, useState } from "react";

function Languages({ languagesUrl }) {
  const [languages, setLanguages] = useState(null);

  useEffect(() => {
    const fetchLanguages = async () => {
      await fetch(`${languagesUrl}`)
        .then((res) => res.json())
        .then((data) => {
          setLanguages(data);
        });
    };
    fetchLanguages();
  }, []);
  console.log(languages);

  const sumFnc = () => {
    let sum = 0;
    for (let key in languages) {
      sum += languages[key];
    }
    return sum;
  };
  const sumVal = sumFnc();
  console.log(sumVal);

  return (
    <>
      <h3>Languages</h3>
      <ul>
        {languages &&
          Object.keys(languages).map((language) => {
            return (
              <li>{`${language} ${(
                (languages[language] * 100) /
                sumFnc()
              ).toFixed(1)}%`}</li>
            );
          })}
      </ul>
    </>
  );
}
export default Languages;
