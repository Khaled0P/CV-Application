import AppForm from './form';
import '../styles/AppSection.css';

export default function AppSection({ fieldName, icon, list, setData, data }) {
  return (
    <div className="container">
      <h1>
        {icon} {fieldName}
      </h1>
      <AppForm list={list} setData={setData} data={data} />
    </div>
  );
}
