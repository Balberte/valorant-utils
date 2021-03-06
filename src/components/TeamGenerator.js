import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';

import Team from './Team';


class TeamGenerator extends Component {

    state = {
        playerCount: 0,        
        playerList : [],
        team1 : [],
        team2 : []
    }

    savePlayer(){
        const players = this.state.playerList;

        if(this.playerInput.value !== ""){
            players.push({
                "id": this.state.playerCount + 1,
                "name": this.playerInput.value
            });
            
            this.setState({ playerList : players, playerCount: this.state.playerCount + 1 });
        }

        this.playerInput.focus();
    }

    shuffleArray(array) {
        let i = array.length - 1;
        const newArray = [...array];
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = newArray[i];
          newArray[i] = newArray[j];
          newArray[j] = temp;
        }
        return newArray;
    }

    async generateTeams(){
        //Clearing teams from state before assign players again
        await this.setState(
            {
                team1 : [],
                team2 : []
            }
        );
        this.assignPlayersToTeams();
    }

    assignPlayersToTeams(){
        
        let addToTeam1 = true;
        let team1 = this.state.team1;
        let team2 = this.state.team2;
        const suffledPlayerList = this.shuffleArray(this.state.playerList);

        suffledPlayerList.map(player => {
            if(addToTeam1){
                if(!this.state.team1.includes(player)){
                    team1.push(player);
                }
            }else{
                if(!this.state.team2.includes(player)){
                    team2.push(player); 
                }
            }
            addToTeam1 = !addToTeam1;

            return null;
        });

        this.setState({team1 : team1});
        this.setState({team2 : team2});
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          this.playerInput.blur();
          this.savePlayer();
        }
      }

    render(){
        return (
            <React.Fragment>
                <div className="Team-generator">
                    <Grid item md={6} sm={12}>
                                <div className="Player-list">
                                <h2>PLAYERS LIST</h2>
                                    <Grid item sm={12}>
                                        <div className="Add-player-wrapper">
                                            <Grid item sm={8}>
                                                <input className="Player-input" type="text" placeholder="Add a nickname"
                                                ref={input => this.playerInput = input} 
                                                onFocus = {() => this.playerInput.value = ""}
                                                onKeyDown={this.handleKeyDown}/>
                                            </Grid>    
                                            <Grid item sm={4}>
                                                <Button variant="outlined" color="secondary" className="Save-Player"
                                                onClick={() => this.savePlayer()}>Add</Button>
                                            </Grid>    
                                        </div>
                                    </Grid>
                                    <ul>
                                        { this.state.playerList.map(player => <li key={player.id}>{player.name}</li>) }
                                    </ul>
                                    <Button variant="outlined" color="secondary" className="Generate-teams" onClick={() => this.generateTeams()}
                                > Generate Teams</Button>
                                </div>
                    </Grid>

                    <Grid item md={4} sm={12}>
                                { this.state.team1.length > 0 && 
                                    <Team players={this.state.team1} number="1"/> }         
                    </Grid>  

                    <Grid item md={4} sm={12}>
                            {  this.state.team2.length > 0 && 
                                <Team players={this.state.team2} number="2"/> }  
                    </Grid>
                </div>     
            </React.Fragment>
        )  
    }
}

export default TeamGenerator;