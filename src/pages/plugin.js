import React from "react";
import "./plugin.css";
import IconSearch from "../icons/Search.svg";
import IconAdd from "../icons/Add.svg";
import { PluginData } from "./pluginData";
import Card from "../components/Card";
import PluginCategoryHeader from "../components/PluginCategoryHeader";

function Plugin() {
  return (
    <>
      <div className="plugin-container">
        <div className="container-serarch-add">
          <div className="search-container">
            <form action="#">
              <input type="text" placeholder="Search" name="search" />
              <button type="submit" className="search-btn">
                <img src={IconSearch} alt="Seach Button" />
              </button>
            </form>
          </div>
          <div className="add-container">
            <button className="add-btn">
              <img src={IconAdd} alt="Add Icon" />
              <span>Add</span>
            </button>
          </div>
        </div>

        {/* featured container */}

        <PluginCategoryHeader title="Featured" />

        <div className="plugin-container row">
          {PluginData.filter((item) => item.category === "Featured").map(
            (item, index) => {
              return (
                <Card
                  key={index}
                  companyLogo={item.companyLogo}
                  checked={item.checked}
                  byWhom={item.byWhom}
                  description={item.description}
                  no_of_installs={item.no_of_installs}
                  subscription_price={item.subscription_price}
                />
              );
            }
          )}
        </div>

        {/* installed container */}

        <PluginCategoryHeader title="Installed" />

        <div className="plugin-container row">
          {PluginData.filter((item) => item.category === "Installed").map(
            (item, index) => {
              return (
                <Card
                  key={index}
                  companyLogo={item.companyLogo}
                  checked={item.checked}
                  byWhom={item.byWhom}
                  description={item.description}
                  no_of_installs={item.no_of_installs}
                  subscription_price={item.subscription_price}
                />
              );
            }
          )}
        </div>

        {/* All container */}

        <PluginCategoryHeader title="All" />

        <div className="plugin-container row">
          {PluginData.filter((item) => item.category === "All").map(
            (item, index) => {
              return (
                <Card
                  key={index}
                  companyLogo={item.companyLogo}
                  checked={item.checked}
                  byWhom={item.byWhom}
                  description={item.description}
                  no_of_installs={item.no_of_installs}
                  subscription_price={item.subscription_price}
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
}

export default Plugin;
