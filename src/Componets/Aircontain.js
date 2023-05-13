import React from "react";
import './Content.css';
const Aircontain = () => {
  return (
    <>
      <div className="site-container">
        <div className="page-title">
          <h1>What Is Air Pollution ?</h1>
        </div>
        <div className="cat-page-content food-page-content">
          <div className="definition">
            <h4>Definition</h4>
            <p>
              <strong>Air pollution</strong>
              <span>
                can be defined as the presence of toxic chemicals or compounds
                (including those of biological origin) in the air, at levels
                that pose a health risk. In an even broader sense, air pollution
                means the presence of chemicals or compounds in the air which
                are usually not present and which lower the quality of the air
                or cause detrimental changes to the quality of life (such as the
                damaging of the ozone layer or causing global warming).
              </span>
            </p>
          </div>
          <div className="row" id="effects">
            <div className="col-xs-12">
              <h2>Causes</h2>
              <p>
                Air pollution is probably one of the most serious environmental
                problems confronting our civilization today. Most often, it is
                caused by human activities such as mining, construction,
                transportation, industrial work, agriculture, smelting, etc.
                However, natural processes such as volcanic eruptions and
                wildfires may also pollute the air, but their occurrence is rare
                and they usually have a local effect, unlike human activities
                that are ubiquitous causes of air pollution and contribute to
                the global pollution of the air every single day.
              </p>
            </div>
          </div>
          <div className="row" id="causes">
            <div className="col-xs-12">
              <h2>Most Common Types of Air Pollutants</h2>
              <p>
                <a href="/chemical/" title="Chemical pollution">
                  A large number of contaminants may pollute the air in a large
                  variety of forms.
                </a>
                Almost any toxic chemical could make its way into the atmosphere
                to pollute the air that we breathe. Aerosol particles (clouds of
                liquid and solid particles in a gas) that are found in the air
                may also contain pollutants. The chemical compounds that lower
                the air quality are usually referred to as air pollutants. These
                compounds may be found in the air in two major forms
              </p>
              <ul className="list-style">
                <li>in a gaseous form (as gases),</li>
                <li>
                  in a solid form (as particulate matter suspended in the air).
                </li>
                <li>
                  Toxic gases produced by the volcanic activity, industrial
                  processes, and burning of fossil fuels.
                </li>
                <li>Toxic gases.</li>
                <li>
                  Extremely toxic, produced by incomplete combustion and vehicle
                  exhaust.
                </li>
                <li>
                  Not toxic, but may dislocate oxygen and produce death through
                  asphyxiation. Additionally, it is a greenhouse gas, emitted by
                  combustion processes, microbial activity, plant respiration.
                </li>
                <li>
                  Toxic and carcinogenic, generated through many human
                  activities such as industrial processes and waste disposal.
                </li>
                <li>
                  PM of volcanoes and wildfires, also produced by fossil fuels,
                  mining, foundries, etc.
                </li>
                <li>
                  Results from industrial processes, mining, foundry activities,
                  and other processes.
                </li>
                <li>
                  Produced through radioactive decay and nuclear explosions, war
                  explosions, etc.
                </li>
                <li>Usually emitted from agricultural processes.</li>
              </ul>
            </div>
          </div>
          <div className="row" id="sources">
            <div className="col-xs-12">
              <h2>Examples of Air Pollutants</h2>
              <p>
                In most cases, air pollutants cannot be seen or smelled.
                However, that does not mean that they do not exist in high
                enough amounts to be a health hazard! Additionally, a number of
                gases are linked to the so-called "greenhouse effect", which
                means that those gases retain more heat and thus contribute to
                the overall global warming. The most common example of a
                greenhouse gas is carbon dioxide, which is emitted from many
                industrial processes. Another example is methane, which is also
                an explosive gas.
                <br />
                <ul className="list-style">
                  <h2>Examples of the main air pollution causes:</h2>
                  <li>
                    Volcanic activities, Winds and air currents, Wildfires,
                    Microbial decaying processes, Radioactive decay
                    processes,Increasing temperatures
                  </li>
                  <li>
                    Mining & Smelting, Mine tailing disposal, Foundry
                    activities, Industrial processes, Transportation,
                    Construction & Demolition, Coal Power Plants & Heating of
                    the Buildings, Waste incineration etc.
                  </li>
                </ul>
                <br />
              </p>
              <h2>The Effects of Air Pollution on Human Health</h2>
              <p>
                Air pollution has serious effects on the human health. Depending
                on the level of exposure and the type of pollutant inhaled,
                these effects can vary, ranging from simple symptoms like
                coughing and the irritation of the respiratory tract to acute
                conditions like asthma and chronic lung diseases. <br /> Skin
                problems and irritations can develop due to prolonged exposure
                to several air pollutants, and a variety of cancer forms may
                develop after inhaling air contaminants. Do not neglect
                potential diseases caused by air pollution. <br /> Air
                pollutants that have serious negative effects on the human
                health can be classified as toxic and non-toxic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aircontain;
