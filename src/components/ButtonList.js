import Button from "./Button";

const categories = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "News",
  "Cooking",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {categories.map((category) => (
        <Button name={category} />
      ))}
    </div>
  );
};

export default ButtonList;
