import React from "react";
class absensi extends React.Component {
  render() {
    const [timerDays, setDays] = useState("00");
    const [timerHours, setHours] = useState("00");
    const [timerMinutes, setMinutes] = useState("00");
    const [timerSeconds, setSeconds] = useState("00");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    let interval = useRef();

    const startTimer = () => {
      const countdownDate = new Date("November 7, 2023 15:21:00").getTime();

      interval.current = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance <= 0) {
          clearInterval(interval.current);
        } else {
          setDays(days.toString().padStart(2, "0"));
          setHours(hours.toString().padStart(2, "0"));
          setMinutes(minutes.toString().padStart(2, "0"));
          setSeconds(seconds.toString().padStart(2, "0"));
        }
      }, 1000);
    };

    useEffect(() => {
      startTimer();
      return () => {
        clearInterval(interval.current);
      };
    });
    if (timerSeconds <= 0) {
      return (
        <section id="absen" className="flex justify-center py-32 mx-8 flex-col">
          <h1 className="text-3xl underline text-center mb-3 font-extralight uppercase">
            Absensi
          </h1>

          <div id="ff-compose"></div>
        </section>
      );
    } else {
      return (
        <div className="min-w-screen min-h-screen flex flex-wrap items-center justify-center px-5 py-5">
          <div className="text-white" id="absen">
            <h1 className="text-3xl underline text-center mb-3 font-extralight uppercase">
              Absensi
            </h1>
            <div className="text-6xl text-center flex flex-wrap w-full items-center justify-center">
              <div className="w-24 mx-1 p-2 bg-primary shadow-xl text-white mt-3 rounded-lg">
                <div className="font-mono leading-none" x-text="days">
                  {timerDays}
                </div>
                <div className="font-mono uppercase text-sm leading-none">
                  Days
                </div>
              </div>
              <div className="w-24 mx-1 p-2 bg-primary shadow-lg text-white mt-3 rounded-lg">
                <div className="font-mono leading-none" x-text="hours">
                  {timerHours}
                </div>
                <div className="font-mono uppercase text-sm leading-none">
                  Hours
                </div>
              </div>
              <div className="w-24 mx-1 p-2 bg-primary shadow-lg text-white mt-3 rounded-lg">
                <div className="font-mono leading-none" x-text="minutes">
                  {timerMinutes}
                </div>
                <div className="font-mono uppercase text-sm leading-none">
                  Minutes
                </div>
              </div>
              <div className="w-24 mx-1 p-2 bg-primary shadow-lg text-white mt-3 rounded-lg">
                <div className="font-mono leading-none" x-text="seconds">
                  {timerSeconds}
                </div>
                <div className="font-mono uppercase text-sm leading-none">
                  Seconds
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
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

export default absensi;
