import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card"
import Testimonial from "./components/Testimonial"
import Tooltip from "./components/Tooltip/Tooltip"
import Toast from "./components/Toast"
import cloudIcon from "./icons/cloud-upload.svg"

const componentsExample = (
    <div className="components-example-container">
      <h2>Badge Component:</h2>
      <Badge shape="pill" color="purple" size="24px">
        <img src="https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg"/>
        Badge
      </Badge>
      <h2>Banner Component:</h2>
      <p>Single Line:</p>
      <Banner
        variant="error"
        size="14px"
        title="There is a problem with your application"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam. "
      />
      <p>Multi Line:</p>
      <Banner
        variant="neutral"
        size="14px"
        title="Update available"
      />
      <h2>Card Component:</h2>
      <Card 
        icon={cloudIcon}
        iconBgColor="#FF9FB6"
        title="Easy Deployment"
        text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis." 
      />
      <h2>Testimonial Component:</h2>
      <Testimonial
        backgroundColor="#2545B8"
        textColor="#FFFFFF"
        image="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Smiling woman sitting on black chair."
      >
        <h4 className="testimonial-quote">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
        </h4>
        <p className="testimonial-name">May Andersons</p>
        <p className="testimonial-role">Workcation, CTO</p>
      </Testimonial>
      <h2>Tooltip Component:</h2>
      <Tooltip
        title="Archive notes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur. "
        icon= {
          <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
        color="black"
        style="bold"
      />
      <h2>Toast Component:</h2>
      <bt />
      <Toast text="Your work has been saved" variant="success"/>
    </div>
)

export default componentsExample