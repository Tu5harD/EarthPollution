import React from "react";
import './Content.css';

const Soilcontain = () => {
  return (
    <>
      <div className="site-container">
        <div className="page-title">
          <h1>What Is Soil Pollution ?</h1>
        </div>
        <div className="cat-page-content food-page-content">
          <div className="definition">
            <h4>Definition</h4>
            <p>
              <strong>Soil pollution</strong> is defined as the presence of
              toxic chemicals{" "}
              <span>
                (pollutants or contaminants) in soil, in high enough
                concentrations to pose a risk to human health and/or the
                ecosystem. In the case of contaminants which occur naturally in
                soil, even when their levels are not high enough to pose a risk,
                soil pollution is still said to occur if the levels of the
                contaminants in soil exceed the levels that should naturally be
                present.
              </span>
            </p>
          </div>
          <div className="row" id="effects">
            <div className="col-xs-12">
              <h2>Soil Pollution Causes</h2>
              <p>
                <a href="/food/causes/" title="Food pollution causes">
                  Food pollution can affect each of us
                </a>{" "}
                All soils, whether polluted or unpolluted, contain a variety of
                compounds (contaminants) which are naturally present. Such
                contaminants include metals, inorganic ions and salts (e.g.
                phosphates, carbonates, sulfates, nitrates), and many organic
                compounds (such as lipids, proteins, DNA, fatty acids,
                hydrocarbons, PAHs, alcohols, etc.). These compounds are mainly
                formed through soil microbial activity and decomposition of
                organisms (e.g., plants and animals). Additionally, various
                compounds get into the soil from the atmosphere, for instance
                with precipitation water, as well as by wind activity or other
                types of soil disturbances, and from surface water bodies and
                shallow groundwater flowing through the soil. When the amounts
                of soil contaminants exceed natural levels (what is naturally
                present in various soils), pollution is generated. There are two
                main causes through which soil pollution is generated:
                anthropogenic (man-made) causes and natural causes.
              </p>
            </div>
          </div>
          <div className="row" id="causes">
            <div className="col-xs-12">
              <h2>Types of Soil Pollutants</h2>
              <p>
                Soil pollution consists of pollutants and contaminants. The main
                pollutants of the soil are the biological agents and some of the
                human activities. Soil contaminants are all products of soil
                pollutants that contaminate the soil. Human activities that
                pollute the soil range from agricultural practices that infest
                the crops with pesticide chemicals to urban or industrial wastes
                or radioactive emissions that contaminate the soil with various
                toxic substances.{" "}
                {/* <a href="/chemical/" title="Chemical pollution">
                  Toxic chemicals can also get into the food in a variety of
                  situations
                </a>
                , including: */}
              </p>
              <ul className="list-style">
                <li>
                  Biological agents work inside the soil to introduce manures
                  and digested sludge (coming from the human, bird and animal
                  excreta) into the soil.;
                </li>
                <li>
                  The soil of the crops is polluted to a large extent with
                  pesticides, fertilizers, herbicides, slurry, debris, and
                  manure.
                </li>
                <li>
                  Urban waste consists of garbage and rubbish materials, dried
                  sludge and sewage from domestic and commercial waste.
                </li>
                <li>
                  Radioactive substances such as Radium, Thorium, Uranium,
                  Nitrogen, etc. can infiltrate the soil and create toxic
                  effects.
                </li>
                <li>
                  Steel, pesticides, textiles, drugs, glass, cement, petroleum,
                  etc. are produced by paper mills, oil refineries, sugar
                  factories, petroleum industries and others as such.
                </li>
              </ul>
            </div>
          </div>
          <div className="row" id="sources">
            <div className="col-xs-12">
              <h2>The Effects of Soil Pollution</h2>
              <p>
                <a href="/food/facts/" title="Facts">
                  Soil pollution affects plants, animals and humans alike.
                </a>
                While anyone is susceptible to soil pollution, soil pollution
                effects may vary based on age, general health status and other
                factors, such as the type of pollutant or contaminant inhaled or
                ingested. However, children are usually more susceptible to
                exposure to contaminants, because they come in close contact
                with the soil by playing in the ground; combined with lower
                thresholds for disease, this triggers higher risks than for
                adults. Therefore, it is always important to test the soil
                before allowing your kids to play there, especially if you live
                in a highly industrialized area.
                <br />
                <br />
              </p>
              <h2>Soil Pollution Facts</h2>
              <p>
                Soil acts as a natural sink for contaminants, by accumulating
                and sometimes concentrating contaminants which end up in soil
                from various sources. Tiny amounts of contaminants accumulate in
                the soil and - depending on the environmental conditions
                (including soil types) and the degradability of the released
                contaminant - can reach high levels and pollute the soil. If the
                soil is contaminated, home-grown vegetables and fruits may
                become polluted too. This happens because most of the soil
                pollutants present in the soil are extracted by the plants along
                with water every time they feed. Thus, it is always prudent to
                test the soil before starting to grow anything edible. This is
                especially important if your garden is located near an
                industrial or mining area, or within 1 mile of a main airport,
                harbor, landfill, or foundry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Soilcontain;
