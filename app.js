let seriesDb = {
  count: "",
  series: "",
  actors: "",
  genres: "",
  private: false,
};

for (const index in seriesDb) {
  let numberOfSeries = prompt("How many do you watch series", "10");

  seriesDb.count = numberOfSeries;
  seriesDb.series = numberOfSeries;
  seriesDb.actors = numberOfSeries;
  seriesDb.genres = numberOfSeries;
}

console.log(seriesDb);
