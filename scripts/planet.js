// Change the planet generator
// Using ErekirPlanetGenerator prevents people to generate random sectors
Events.on(ContentInitEvent, e => {
    Vars.content.planet("pla-erekis").generator = new ErekirPlanetGenerator();
    Vars.content.planet("pla-serpulp").generator = new SerpuloPlanetGenerator();
    Vars.content.planet("pla-tantrot").generator = new TantrosPlanetGenerator();
});