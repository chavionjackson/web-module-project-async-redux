import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchTeams } from "../actions";

const Cards = (props) => {
  useEffect(() => {
    props.fetchTeams();
  }, []);

  return (
    <div>
      {props.teams.map((team) => (
        <div key={team.id} className="card" style={{ width: "18rem" }}>
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">{team.full_name}</h5>
            <li className="card-text">Conference: {team.conference}</li>
            <li className="card-text">Division: {team.division}</li>
            <li className="card-text">Team Mascot: {team.name}</li>
            <li className="card-text">Abbreviation: {team.abbreviation}</li>
            <br />
            <a href="https://www.nba.com/" className="btn btn-primary">
              View Stats
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    teams: state.teams,
  };
};

export default connect(mapStateToProps, { fetchTeams })(Cards);
