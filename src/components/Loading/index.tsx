import { LoadingProp } from "./type";

const Loading = ({ theme = "success" }: LoadingProp) => {
  return (
    <div className="d-flex justify-content-center m-auto">
      <div className={`loading spinner-border text-${theme}`}></div>
    </div>
  );
};

export default Loading;
