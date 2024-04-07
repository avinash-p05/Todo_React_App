
import FirstComponent, { FifthComponent } from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'
import LerningJavaScript from './LearningJavaScript';

export default function LearningComponent() {
    return (
      <div className="App">
        Todo Application
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        <FourthComponent/>
        <FifthComponent/>
        <LerningJavaScript/>
      </div>
    );
  }