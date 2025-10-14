import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Carousel.css';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: '',
            isDragging: false,
            startPosX: 0,
        };
        this.autoSlideInterval = null; // To store the interval ID
    }

    componentDidMount() {
        this.startAutoSlide();
    }

    componentWillUnmount() {
        this.stopAutoSlide();
    }

    // Start auto-slide movement
    startAutoSlide = () => {
        this.autoSlideInterval = setInterval(this.moveRight, 3000); // Move right every 5 seconds
    };

    // Stop auto-slide movement
    stopAutoSlide = () => {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
        }
    };

    // Move carousel to the left
    moveLeft = () => {
        let newActive = this.state.active;
        newActive--;
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left',
        }, () => {
            this.stopAutoSlide(); // Stop the auto-slide timer
            this.startAutoSlide(); // Restart the timer
        });
    };

    // Move carousel to the right
    moveRight = () => {
        let newActive = this.state.active;
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right',
        }, () => {
            this.stopAutoSlide(); // Stop the auto-slide timer
            this.startAutoSlide(); // Restart the timer
        });
    };

    // Handle when dragging starts (for both mouse and touch)
    handleDragStart = (event) => {
        const startPosX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX;
        this.setState({
            isDragging: true,
            startPosX,
        });
    };

    // Handle dragging movement (for both mouse and touch)
    handleDragMove = (event) => {
        if (!this.state.isDragging) return;

        const currentPosX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
        const diff = this.state.startPosX - currentPosX;

        if (diff > 50) {
            this.moveRight();
            this.setState({ isDragging: false });
        } else if (diff < -50) {
            this.moveLeft();
            this.setState({ isDragging: false });
        }
    };

    // End the drag (for both mouse and touch)
    handleDragEnd = () => {
        this.setState({
            isDragging: false,
            startPosX: 0,
        });
    };

    // Generate the items for display in the carousel
    generateItems() {
        const items = [];
        let level;

        for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
            let index = i;
            if (i < 0) {
                index = this.state.items.length + i;
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length;
            }
            level = this.state.active - i;
            items.push(<Item key={index} id={this.state.items[index]} level={level} />);
        }
        return items;
    }

    render() {
        return (
            <div
                className="carousel-container"
                onMouseDown={this.handleDragStart}
                onMouseMove={this.handleDragMove}
                onMouseUp={this.handleDragEnd}
                onMouseLeave={this.handleDragEnd}
                onTouchStart={this.handleDragStart}
                onTouchMove={this.handleDragMove}
                onTouchEnd={this.handleDragEnd}
            >
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div className="carousel-title achievements-heading">
                    ACHIEVEMENTS
                </div>

                <style jsx>{`
                    .carousel-title {
                        text-align: center;
                        color: #FFF;
                        font-family: 'Lato', sans-serif;
                        font-weight: 300;
                        padding: 20px 20px 20px 20px;
                    }

                    .achievements-heading {
                        font-size: 50px; /* Adjust to match the specified size */
                        font-weight: bold; /* Ensure the text is bold */
                        letter-spacing: 10px;
                        background: -webkit-linear-gradient(white, #03002A);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        margin: 20px 20px 20px 20px; /* Ensures consistent margin */
                        
                    }
                     @media (min-width: 768px) {
          .achievements-heading  {
            font-size: 50px;
            letter-spacing: 15px;
          }
        }

        @media (max-width: 768px) {
          .achievements-heading  {
            font-size: 40px;
            letter-spacing: 10px;
          }
        }

        @media (max-width: 425px) {
          .achievements-heading {
            font-size: 30px;
            letter-spacing: 8px;
          }
        }

        @media (max-width: 375px) {
          .achievements-heading  {
            font-size: 25px;
            letter-spacing: 6px;
          }
        }
                `}</style>

                <div id="carousel" className="noselect">
                    <TransitionGroup>
                        {this.generateItems().map(item => (
                            <CSSTransition
                                key={item.key}
                                timeout={300}
                                classNames={this.state.direction}
                            >
                                {item}
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>
        );
    }
}

class Item extends Component {
    render() {
        const { id, level } = this.props;
        const className = `item level${level}`;
        return (
            <div className={className}>
                <img src={id} alt={`Year ${id.slice(10, 14)}`} style={{ width: '100%', height: '100%' }} />
            </div>
        );
    }
}

const items = [
    'templates/2016.png',
    'templates/2017.png',
    'templates/2018.png',
    'templates/2019.png',
    'templates/2020.png',
    'templates/2021.png',
    'templates/2022.png',
    'templates/2023.png',
    'templates/2024.png'
];

export default function App() {
    return <Carousel items={items} active={0} />;
}
