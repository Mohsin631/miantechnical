import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
    this.autoPlayInterval = null;
  }

  componentDidMount() {
    this.startAutoPlay();
  }

  componentWillUnmount() {
    clearInterval(this.autoPlayInterval);
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.setState((prevState) => ({
        tabIndex: (prevState.tabIndex + 1) % this.testimonials.length,
      }));
    }, 4000); // ✅ Change slide every 4 seconds
  }

  testimonials = [
    {
      text: "The team exceeded our expectations! Their innovative IT solutions streamlined our processes and boosted productivity significantly.",
      name: "Alex Johnson",
      role: "CTO, TechNova Solutions",
    },
    {
      text: "Outstanding engineering expertise! They delivered our project ahead of schedule without compromising on quality.",
      name: "Maria Rodriguez",
      role: "Head of Operations, BuildPro Inc.",
    },
    {
      text: "Their cloud migration services saved us thousands in infrastructure costs while improving system reliability.",
      name: "David Lee",
      role: "IT Director, SkyNet Corp.",
    },
    {
      text: "From concept to deployment, the mobile app development was seamless. Our users love the intuitive design!",
      name: "Sophia Williams",
      role: "Product Manager, AppFlow",
    },
    {
      text: "Cybersecurity was a major concern for us. Their proactive approach gave us complete peace of mind.",
      name: "Michael Brown",
      role: "CEO, SecureData Inc.",
    },
    {
      text: "Our partnership has been phenomenal. Their project management expertise ensured timely delivery every time.",
      name: "Emma Davis",
      role: "COO, InnovateX",
    },
    {
      text: "Exceptional service and support! They were available 24/7 during critical stages of our project rollout.",
      name: "James Carter",
      role: "Managing Director, AlphaTech",
    },
    {
      text: "Their engineering solutions are truly world-class. Highly recommend for complex industrial projects.",
      name: "Olivia Martinez",
      role: "VP Engineering, Structura",
    },
  ];

  render() {
    return (
      <div className="rn-testimonial-wrapper">
        <Tabs selectedIndex={this.state.tabIndex} onSelect={(index) => this.setState({ tabIndex: index })}>
          {/* Testimonial Panels */}
          {this.testimonials.map((item, index) => (
            <TabPanel key={index}>
              <div className="rn-testimonial-content text-center fade-in">
                <div className="inner">
                  <p>“{item.text}”</p>
                </div>
                <div className="author-info">
                  <h6>
                    <span>{item.name} </span> - {item.role}
                  </h6>
                </div>
              </div>
            </TabPanel>
          ))}

          {/* Dot Navigation */}
          <TabList className="testimonial-dot-nav">
            {this.testimonials.map((_, i) => (
              <Tab key={i}>
                <span className={`dot ${this.state.tabIndex === i ? "active" : ""}`}></span>
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </div>
    );
  }
}

export default Testimonial;
