import PropTypes from "prop-types";

const Skill = (props) => {
  return (
    <div className="skill">
      <img style={{borderRadius : '10%'}} src={`/me/skills/${props.skill}`} alt={`@dnipy`} className="skill-img" />
    </div>
  );
};
Skill.propTypes = {
  skill: PropTypes.string.isRequired,
};
export default Skill;
