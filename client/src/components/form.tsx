import axios from "axios";
import { useContext, useState } from "react";
import { DataContext } from "../context/fetch";

interface FNSMRequest {
  id: number;
  title?: string;
  report: string;
  name?: string;
  distance: number;
  spider: string;
}

const Form: React.FC = () => {
  const { data, baseUrl } = useContext(DataContext);
  const [formData, setFormData] = useState<FNSMRequest>({
    id: 0,
    title: "",
    report: "",
    name: "",
    distance: 0,
    spider: "",
  });

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    try {
      const response = upd
        ? await axios.put(`${baseUrl}/updRequest/${data.id}`, formData)
        : await axios.post(`${baseUrl}/addRequest`, formData);
      window.alert(response.data);
    } catch (error) {
      e.preventDefault();
      window.alert(`Error injectiing alien DNA, ${error}`);
    }
  };

  const questions = [
    {
      label: "Title",
      placeholder: "Required",
      type: "text",
      name: "title",
    },
    {
      label: "Description",
      placeholder: "Requireed",
      type: "text",
      name: "report",
    },
    {
      label: "Name",
      placeholder: "optional",
      type: "text",
      name: "name",
    },
    {
      label: "Spider",
      placeholder: "spider",
      type: "",
      name: "spider",
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="form">
      {questions.map((question, index) => {
        return (
          <div>
            <label htmlFor={question.name}>{question.label}</label>
            <br />

            {question.label == "Spider" ? (
              <select>
                <option value="milesTwitter">@BKLYNSpider</option>
                <option value="petersTwitter">@NYCWallCrawler</option>
              </select>
            ) : (
              <input
                key={index}
                type={question.type}
                name={question.name}
                id={question.name}
                placeholder={question.placeholder}
                required={question.placeholder === "Required"}
                onChange={change}
                value={formData[question.name as keyof data] || ""}
                autoFocus={question.name === "title"}
              />
            )}
          </div>
        );
      })}
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
