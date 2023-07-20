const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-image">
    <div className="heading">
      <h1>Social Buttons</h1>
    </div>
    <div className="buttons-container">
      <Button buttonText="Like" className="like-button" />
      <Button buttonText="Comment" className="Comment-button" />
      <Button buttonText="Share" className="Share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
