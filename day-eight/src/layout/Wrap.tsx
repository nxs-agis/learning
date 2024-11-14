type Country = {
  capital: string;
  languages: string;
  currency: string;
};

function Wrap({ capital, languages, currency }: Country) {
  return (
    <>
      <h1>Capital: {capital}</h1>
      <h1>Languanges: {languages}</h1>
      <h1>Currency: {currency}</h1>
    </>
  );
}

export default Wrap;
