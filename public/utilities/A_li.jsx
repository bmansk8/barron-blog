export default function A_li(props) {
  return (
    <li>
      <a href={props.route + props.name}>{props.name} </a>
    </li>
  );
}