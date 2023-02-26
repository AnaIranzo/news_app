import React, { Component } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



import Typography from '@mui/material/Typography';

class Cards extends Component {

  render() {
    return (
      <>
      
      <Card className="card-container">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {this.props.data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {this.props.data.abstract}
          </Typography>
          <Typography>
          {this.props.data.byline}
          </Typography>
          <Typography>
          {this.props.data.published_date}
            </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={this.props.remove}>Delete</Button>
          <Button size="small"> <a href={this.props.data.url} id='link_news'>Learn more</a></Button>
        </CardActions>
      
      </Card>
      </>
      
    );
    
    
    
    
    
   /*  <article className='card'>
      <a href={this.props.data.url}><h2>{this.props.data.title}</h2></a>
      <p>{this.props.data.abstract}</p>
      <p>{this.props.data.byline}</p>
      <p>{this.props.data.published_date}</p>
      <Button onClick={this.props.remove} >Delete</Button>
    </article>; */



  }
}

export default Cards;


