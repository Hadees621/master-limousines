import React from "react";
import { Footer, Navbar } from "@/components/common";

const Button = () => {
  return (
    <button className="font-Montserrat font-600 text-shadow m-32 mt-48 h-[74px] w-[280px] rounded-sm bg-[#A72211] text-[19px] uppercase text-[#FFF] hover:bg-red-800 focus:outline-none focus:ring focus:ring-red-500">
      See options
    </button>
  );
};

const Section = ({ order, textContent, title, imgURL }) => {
  return (
    <div
      className={`flex flex-wrap ${
        order === "right" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div
        className={`w-full sm:w-full md:w-full lg:w-1/2 ${
          order === "left" ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <img src={imgURL} alt="Image" className="h-full w-full" />
      </div>
      <div
        className={`flex w-full flex-col items-center justify-center border-gray-100 bg-black sm:w-full sm:p-24 md:w-full md:p-32 lg:w-1/2 ${
          order === "right" ? "lg:order-2" : "lg:order-1"
        } lg:pt-20`}
      >
        <h1 className="font-Montserrat mb-24 pt-32 text-center text-[33px] font-medium uppercase tracking-[14px] text-white">
          {title}
        </h1>

        {textContent.map((text, index) => (
          <React.Fragment key={index}>
            <p className="font-Archivo px-5 text-center text-[24px] text-white">
              {text}
            </p>
            {index < textContent.length - 1 && <br />}
          </React.Fragment>
        ))}

        <Button />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <img
        src="https://s3-alpha-sig.figma.com/img/e448/859b/b5312b35c8cb5a8311d8bc41e73c0c06?Expires=1700438400&Signature=Ts34fhBljEXAykVvnhaYgmswtMDjh9KbtTOWQcEdEbJo0cip~NIMwugW8H4DW3H5G2Zo~We7zCguegeY3zRbUVqIAuLuCrKMC4HvnCRhy3ONiVlLxnVIjkJ1p4Q44Rr2yDvRvtwREwnYxYp5jfnG3oGkcfc~C9V7N3EYz0FYVzCnb9NLEWzuXR7FyYeU7IEs3j8~yy4CLyjDLon21GZ-nmRF12iakoS-oRy4Ikiuyx-23FDKrvh8RQagExpsPgyYRvUVSsCq4AXvcQjpHrC6lhooSpm6K4dKIlNgy9GqPn2wTKKT336QvZEPMYKOapxiz4Ikd8BvIDh1ETdQFwM1Og__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="Background Image"
        className="h-auto w-full"
      />
      <div className="flex items-center bg-black">
        <div className="w-[35%] pb-20">
          <div className="flex h-full flex-col">
            <h1 className="font-league-spartan pl-32 text-[110px] font-[700] tracking-[10px] text-white">
              THE FLEET
            </h1>
            <p className="font-Archivo w-full justify-center px-28 text-[26px] leading-[32px] text-white">
              Experience safe and reliable Luxury Ground Transportation with our
              professional chauffeurs at Masterpiece Limousine. We are fully
              licensed and insured for your peace of mind, and our fleet of
              vehicles is perfect for any occasion, whether it's a corporate
              event or a special occasion. Let us take care of the driving while
              you sit back, relax, and enjoy the comfort and sophistication of
              our luxury ground transportation services.
            </p>
          </div>
        </div>
        <div className="pb-18 flex-grow">
          <div className="flex w-full items-center justify-center">
            <img
              src="/ourfleet/hero/benz.png"
              alt=""
              className="h-[197px] w-[500px]"
            />
            <img
              src="/ourfleet/hero/ford.png"
              alt="Background Image"
              className="h-[197px] w-[500px]"
            />
            <img
              src="/ourfleet/hero/cad.png"
              alt="Background Image"
              className="h-[197px] w-[500px]"
            />
          </div>
          <div className="flex w-full justify-center">
            <img
              src="/ourfleet/hero/lincoln.png"
              alt="Background Image"
              className="h-[197px] w-[500px]"
            />
            <img
              src="/ourfleet/hero/chev.png"
              alt="Background Image"
              className="h-[197px] w-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
function OurFleet() {
  const sections = [
    {
      order: "left", // Image on left, text on right
      textContent: [
        " When it comes to luxury ground transportation, the Mercedes-Benz Sprinter Limo is a top choice for any occasion. Whether you're planning a corporate event or a wedding, this sleek and stylish vehicle is sure to impress. Not only is the interior spacious and comfortable, but the onboard TVs and bar area make it perfect for presentations or celebrations.",
        "At Masterpiece Limousine, we prioritize safety, reliability, and comfort, which is why we offer the Mercedes Sprinter Limo for our clients. Our professionally trained chauffeurs ensure a smooth and enjoyable ride, and we are fully licensed and insured for your peace of mind.",
        "In addition to corporate events and weddings, the Mercedes Sprinter Limo is also a popular choice for proms, bachelor/bachelorette parties, and other special occasions. With light shows and customizable music options, this luxury vehicle adds a touch of glamour to any event.",
        "Trust Masterpiece Limousine to provide you with the highest quality luxury ground transportation services. Contact us today to book the Mercedes Sprinter Limo for your next event and experience the ultimate in style and comfort.",
      ],
      title: "Party Bus",
      imgURL: "/ourfleet/MSL.png",
    },
    {
      order: "right", // Image on right, text on left
      textContent: [
        "Looking for luxury ground transportation that's reliable, comfortable, and safe? Look no further than the Mercedes-Benz Executive Sprinter. This vehicle is perfect for corporate team-building excursions, with its spacious interior and open-style limo seating, providing a luxury environment for up to 12 passengers.",
        "Not only is the Sprinter impressive in appearance, but it's also equipped with advanced safety features such as collision prevention, lane keeping, and crosswind assist. The Sprinter's V6 CDI diesel engine offers powerful performance and fuel efficiency, making it a reliable choice for any long-distance travel.",
        "Aside from its impressive performance and safety features, the Sprinter is also known for its quality and reliability. Its spacious XL extended cab model provides plenty of room for luggage, making it a convenient choice for transporting wedding parties or other large groups. Additionally, guests can enjoy their preferred music with an AUX cord on board, adding to the celebratory atmosphere.",
        "Choose the Mercedes-Benz Sprinter for a luxury and reliable transportation experience that exceeds your expectations. Contact us today to book your Mercedes-Benz Executive Sprinter and experience the comfort and sophistication of luxury ground transportation.",
      ],
      title: "Party Bus",
      imgURL: "https://s3-alpha-sig.figma.com/img/0baf/ec15/c78d0baf41d1fd2e2eec376fbf1e9ab8?Expires=1700438400&Signature=hgxoKd2dFd1TjcQrKAU9yzff~wC9qkNyRVQjV6Oq5-KXvII9KWTbJwxmr1AZeCh8h02gnmDKKUzkEjMdmHGrMj7m1QbigNSLRLNkfk9hmMAAnvdJJg3h4Y8mv3BK0IEmoAmDzZCpW18IjqMKERXCKfaWW2Kwbd~R-gJkkhOVpyXAPXapdk~R4pQts0-Kj2JlNcjqMjV56laIqzwgx40elsKGVNEmm6dEDOvaScSHS2MmxZ0Kd1VWcOFaVlo4KeSZ4IineSRvMxTnjTLzbv4mkvcgWuEO0vN0NnYRNoYWcZPiGUJqLeelWQyBggs2kwz3YKfofudVE4C4T3IcNxukqg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      order: "left", // Image on left, text on right
      textContent: [
        "Masterpiece Limousine is proud to offer our clients luxury transportation services that combine comfort, safety, and reliability. Whether you're traveling for business or pleasure, our professional chauffeurs are dedicated to ensuring your experience is stress-free and enjoyable. Our luxurious stretch limo rental is one of our most popular services, offering passengers an unforgettable travel experience.",
        "Our Stretch limos are spacious, comfortable, and can accommodate up to 8 passengers, with plenty of luggage space. This makes it perfect for airport transportation, business meetings, or a night out on the town. The Stretch limo rental is the perfect choice for those who seek both style and convenience.",
        "At Masterpiece Limousine, we pride ourselves on our experienced and professional chauffeurs who are knowledgeable about the San Diego area and can provide a stress-free journey to your destination. We follow all local regulations and have a strict policy of zero-tolerance for alcohol or drug use in our vehicles. Safety is our top priority, and we are fully licensed and insured for your peace of mind.",
        "In addition to our Stretch limo rental, we offer a range of other luxury vehicles, including H2 Hummer limos, Cadillac Escalade limos, and more. We ensure that we have the perfect vehicle to suit your style and budget.",
        "At Masterpiece Limousine, we aim to provide you with a travel experience that is nothing short of exceptional. Our luxurious Stretch limo rental and other luxury transportation options are the perfect choice for those who seek both comfort and elegance. Contact us today to learn more about our services and book your next luxurious travel experience with us.",
      ],
      title: "STRETCH LIMOUSINE",
      imgURL: "/ourfleet/SL.png",
    },
    {
      order: "right", // Image on right, text on left
      textContent: [
        "At Masterpiece Limousine, we understand the importance of making a statement and standing out from the crowd. That's why we offer the most exclusive and luxurious limousine services in San Diego, including our H2 Hummer Limo.",
        "Our H2 Hummer Limo is the epitome of exclusivity, attracting more attention than any other car on the street. Custom-designed with amenities like neon lights, televisions, and a wet bar, this limo is perfect for bachelor/bachelorette parties, weddings, proms, nights on the town, and sporting events. With Bluetooth connectivity, you can easily stream your favorite music and make hands-free calls while you ride in style.",
        "Step into the Masterpiece Hummer Limo, and suddenly you're turning heads and the center of attention. You'll feel like a VIP, making a grand entrance to your event in the most stylish and unforgettable way possible. Our H2 Hummer Limo is perfect for those who want to do things in their unique style and accentuate their star quality.",
        "At Masterpiece Limousine, we pride ourselves on providing our clients with the highest service and luxury. When you choose our H2 Hummer Limo, you can trust that you will receive the best in style, comfort, and convenience. Our professional and experienced chauffeurs are dedicated to ensuring that your ride is safe, comfortable, and stress-free.",
        "Book our H2 Hummer Limo today and experience the exclusivity and luxury that only Masterpiece Limousine can offer. Make a statement and stand out from the crowd with the most exclusive limousine service in San Diego.",
      ],
      title: "STRETCH LIMOUSINE",
      imgURL: "/ourfleet/stretch-lemo.png",
    },
    {
      order: "left", // Image on left, text on right
      textContent: [
        "Luxury ground transportation is the perfect way to elevate your travel experience, and Masterpiece Limousine offers a range of options to suit your needs. Our Executive Sedans are a great choice for small groups, with seating for 2-3 passengers and room for luggage. They are ideal for business meetings, airport transportation, and special events.",
        "With luxurious features like leather seats, climate control, and ample legroom, our Executive Sedans offer both style and comfort. Our fleet includes top-of-the-line brands like Mercedes, Cadillac, and Lincoln, ensuring a smooth and sophisticated ride.",
        "At Masterpiece Limousine, we prioritize safety, reliability, and comfort, and our professional chauffeurs are trained to provide the best service. With our Executive Sedans, you can sit back and relax, knowing that you're in good hands.",
        "If you're interested in booking an Executive Sedan for your transportation needs, don't hesitate to contact us. We'll work with you to find the perfect vehicle for your occasion, and our team will ensure a smooth and enjoyable ride every time.",
      ],
      title: "SEDAN",
      imgURL: "/ourfleet/ES.png",
    },
    {
      order: "right", // Image on right, text on left
      textContent: [
        "Indulge in the luxury of our new Executive SUVs, designed for the discerning traveler seeking a top-notch transportation experience. Our SUVs are the epitome of sophistication, offering unparalleled comfort and convenience.",
        "From the moment you step into one of our Executive SUVs, you will be struck by their sleek and modern design. The plush leather seating and advanced audio systems provide the ultimate in luxury and entertainment. With three rows of seating, these vehicles can accommodate up to 6 passengers comfortably, making them the perfect choice for exclusive corporate events or private gatherings.",
        "But our Executive SUVs are not just visually stunning; they are also environmentally friendly. As Flex Fuel vehicles, they can run on 85% Ethanol, making them an excellent choice for those looking to reduce their carbon footprint.",
        "At Masterpiece Limousine, we pride ourselves on our dedication to safety, reliability, and comfort. Our elite drivers are highly trained and knowledgeable about the Southern California region, ensuring that your ride will be both enjoyable and efficient. With our Executive SUVs, you can sit back and relax, knowing that you are in the hands of professionals who prioritize your comfort and safety.",
        "Whether you are a celebrity, executive, or discerning traveler looking for an exclusive transportation experience, our Executive SUVs are the perfect choice. Contact us today to book your ride and indulge in the luxury and sophistication of our new fleet.",
      ],
      title: "SUV",
      imgURL: "/ourfleet/exec-suv.png",
    },
  ];

  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      {sections.map((section, index) => (
        <Section
          key={index}
          order={section.order}
          textContent={section.textContent}
          title={section.title}
          imgURL={section.imgURL}
        />
      ))}
      <Footer />
    </>
  );
}

export default OurFleet;
