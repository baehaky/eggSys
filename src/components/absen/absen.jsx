import React from "react";
class absen extends React.Component {
  render() {
    return (
      <section id="absen" className="flex justify-center py-32 mx-8 flex-col">
        <h1 className="text-3xl underline text-center mb-3 font-extralight uppercase">
          Absensi
        </h1>

        <div id="ff-compose"></div>
      </section>
    );
  }
  componentDidMount() {
    var script = document.createElement("script");
    script.id = "ff-script";
    script.src =
      "https://formfacade.com/include/115533817563648496641/form/1FAIpQLSdhVZ1ZnYp58b-ltCpDFa_22YRMgjOxi5fgHTYanYmiclvDiQ/classic.js?div=ff-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }
}

export default absen;
