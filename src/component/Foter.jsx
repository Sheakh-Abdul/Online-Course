
export function Foter(){
    return(
        <div style={{ backgroundColor: 'black',alignItems: 'center',justifyContent: 'center',display: 'flex'}}>
            <footer style={{ marginTop: 10, padding: 0, height: '100px' ,color: "white"}}>
            <p>&copy; {new Date().getFullYear()} StudentLearning.com</p>
      <p>Contact: info@StudentLearning.com</p>
            </footer>
            </div>
    );
}