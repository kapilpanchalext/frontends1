// import { useRef, useState } from "react";
// import './App.css';

// function App() {
//   // const [percentage, setPercentage] = useState(50);

//   // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   const value = Math.max(0, Math.min(100, Number(e.target.value)));
//   //   setPercentage(value);
//   // };

//   const [scrollPosition, setScrollPosition] = useState(0);
//   const contentEditableRef = useRef(null);

//   const handleScroll = () => {
//     if (contentEditableRef.current) {
//       setScrollPosition(contentEditableRef.current.scrollTop);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Hello World</h1>
     
//       {/* <div contentEditable style={{border: '1px solid black', height: '500px', overflow: 'auto'}}></div> */}
//       <div
//         contentEditable
//         ref={contentEditableRef}
//         onScroll={handleScroll}
//         style={{
//           border: '1px solid black',
//           height: '500px',
//           overflowY: 'auto',          
//           margin: '0 auto',
//         }}
//       >
//         <div className="moving-container" style={{ top: `${scrollPosition}%` }}>
//           <h6 className="moving-line"> A4 </h6>
//           <hr className="moving-line" />
//         </div>

//       <h1>The Impact of Technology on Modern Education</h1>
//       <h2>Introduction</h2>
//       <p>Technology has revolutionized almost every aspect of our lives, and education is no exception. From the way teachers deliver instruction to how students learn and interact, technology has transformed the traditional educational landscape. This article explores the significant impact of technology on modern education, including its benefits, challenges, and future prospects.</p>
//       <h2>Benefits of Technology in Education</h2>
//       <h3>Enhanced Learning Experiences</h3>
//       <p>One of the most significant benefits of technology in education is the enhanced learning experiences it provides. Interactive tools such as smart boards, educational software, and virtual reality enable students to engage with the material in a more immersive and interactive way. These tools cater to different learning styles, making education more inclusive and effective.</p>
//       <h3>Access to a Wealth of Information</h3>
//       <p>The internet is a vast repository of knowledge, and technology has made this wealth of information readily accessible to students. Online resources, such as academic journals, e-books, and educational websites, provide students with instant access to information that was once difficult to obtain. This has democratized education, allowing students from all backgrounds to learn and grow.</p>
//       <h3>Personalized Learning</h3>
//       <p>Technology has also made personalized learning a reality. Adaptive learning software uses algorithms to analyze students' strengths and weaknesses, tailoring instruction to meet their individual needs. This personalized approach helps students learn at their own pace and ensures that they grasp fundamental concepts before moving on to more complex topics.</p>
//       <h3>Collaboration and Communication</h3>
//       <p>Modern technology has made it easier for students to collaborate and communicate with their peers and teachers. Tools such as email, video conferencing, and collaborative platforms like Google Classroom and Microsoft Teams enable seamless communication and teamwork. This fosters a more interactive and supportive learning environment.</p>
//       <h2>Challenges of Technology in Education</h2>
//       <h3>Digital Divide</h3>
//       <p>Despite the many benefits of technology in education, there are significant challenges that need to be addressed. One of the most pressing issues is the digital divide. Not all students have equal access to technology, and this disparity can exacerbate existing educational inequalities. Students from low-income families or rural areas may lack the necessary devices or internet connectivity, putting them at a disadvantage.</p>
//       <h3>Overreliance on Technology</h3>
//       <p>Another challenge is the overreliance on technology. While technology can enhance learning, it should not replace traditional teaching methods. An overemphasis on digital tools can lead to a decline in critical thinking and problem-solving skills. It is essential to strike a balance between technology and traditional teaching to ensure a well-rounded education.</p>
//       <h3>Privacy and Security Concerns</h3>
//       <p>The increased use of technology in education also raises privacy and security concerns. Schools and educational institutions must ensure that students' personal information is protected from cyber threats. There is also the risk of data breaches and unauthorized access to sensitive information. Implementing robust security measures and educating students about online safety are crucial steps in mitigating these risks.</p>
//       <h2>The Future of Technology in Education</h2>
//       <h3>Artificial Intelligence and Machine Learning</h3>
//       <p>The future of technology in education looks promising, with advancements in artificial intelligence (AI) and machine learning set to play a significant role. AI-powered tools can provide real-time feedback, helping students improve their performance. Machine learning algorithms can analyze vast amounts of data to identify trends and predict students' future performance, enabling more effective interventions.</p>
//       <h3>Virtual and Augmented Reality</h3>
//       <p>Virtual reality (VR) and augmented reality (AR) are poised to revolutionize the educational experience. VR can transport students to different environments, allowing them to explore historical sites, conduct virtual experiments, and even travel to outer space. AR can overlay digital information onto the real world, enhancing the learning experience by providing additional context and interactivity.</p>
//       <h3>Gamification</h3>
//       <p>Gamification is another emerging trend in education. By incorporating game elements such as points, badges, and leaderboards into the learning process, educators can motivate and engage students. Gamification makes learning more enjoyable and can improve student retention and performance.</p>
//       <h3>Online and Blended Learning</h3>
//       <p>The COVID-19 pandemic has accelerated the adoption of online and blended learning models. Online learning platforms and virtual classrooms have become essential tools for delivering instruction remotely. Blended learning, which combines online and in-person instruction, offers flexibility and ensures continuity of education in the face of disruptions.</p>
//       <h2>Conclusion</h2>
//       <p>In conclusion, technology has had a profound impact on modern education, offering numerous benefits such as enhanced learning experiences, access to information, personalized learning, and improved collaboration. However, challenges such as the digital divide, overreliance on technology, and privacy concerns must be addressed to fully realize its potential. Looking ahead, advancements in AI, VR, AR, gamification, and online learning will continue to shape the future of education, making it more inclusive, engaging, and effective.</p>
        
//       </div>
//       <p>Scroll Position: {scrollPosition}px</p>
//       {/* <input
//         type="number"
//         value={percentage}
//         onChange={handleInputChange}
//         min="0"
//         max="100"
//         style={{ marginTop: '20px' }}
//       />
//       <p>Color percentage: {percentage}%</p> */}
//     </div>
//   )
// }

// export default App;



import { useRef, useState, useEffect } from "react";
import './App.css';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [a4Heights, setA4Heights] = useState([]);
  const contentEditableRef = useRef(null);

  const a4HeightPx = (297 / 25.4) * 96;

  useEffect(() => {
    if (contentEditableRef.current) {
      const totalHeight = contentEditableRef.current.scrollHeight;
      const heights = [];
      for (let i = 0; i < totalHeight; i += a4HeightPx) {
        heights.push(i);
      }
      setA4Heights(heights);
    }
  }, [a4HeightPx, contentEditableRef.current?.scrollHeight]);

  const handleScroll = () => {
    if (contentEditableRef.current) {
      setScrollPosition(contentEditableRef.current.scrollTop);
    }
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div
        contentEditable
        ref={contentEditableRef}
        onScroll={handleScroll}
        style={{
          border: '1px solid black',
          height: '500px',
          overflowY: 'auto',
          margin: '0 auto',
          position: 'relative',
          width: '210mm'
        }}
      >
        {a4Heights.map((height, index) => (
          <div key={index} style={{ position: 'absolute', top: `${height}px`, width: '100%' }}>
            <h6 className="moving-line">A4</h6>
            <hr className="moving-line" />
          </div>
        ))}
        <h1>The Impact of Technology on Modern Education</h1>
        <h2>Introduction</h2>
        <p>Technology has revolutionized almost every aspect of our lives, and education is no exception. From the way teachers deliver instruction to how students learn and interact, technology has transformed the traditional educational landscape. This article explores the significant impact of technology on modern education, including its benefits, challenges, and future prospects.</p>
        <h2>Benefits of Technology in Education</h2>
        <h3>Enhanced Learning Experiences</h3>
        <p>One of the most significant benefits of technology in education is the enhanced learning experiences it provides. Interactive tools such as smart boards, educational software, and virtual reality enable students to engage with the material in a more immersive and interactive way. These tools cater to different learning styles, making education more inclusive and effective.</p>
        <h3>Access to a Wealth of Information</h3>
        <p>The internet is a vast repository of knowledge, and technology has made this wealth of information readily accessible to students. Online resources, such as academic journals, e-books, and educational websites, provide students with instant access to information that was once difficult to obtain. This has democratized education, allowing students from all backgrounds to learn and grow.</p>
        <h3>Personalized Learning</h3>
        <p>Technology has also made personalized learning a reality. Adaptive learning software uses algorithms to analyze students' strengths and weaknesses, tailoring instruction to meet their individual needs. This personalized approach helps students learn at their own pace and ensures that they grasp fundamental concepts before moving on to more complex topics.</p>
        <h3>Collaboration and Communication</h3>
        <p>Modern technology has made it easier for students to collaborate and communicate with their peers and teachers. Tools such as email, video conferencing, and collaborative platforms like Google Classroom and Microsoft Teams enable seamless communication and teamwork. This fosters a more interactive and supportive learning environment.</p>
        <h2>Challenges of Technology in Education</h2>
        <h3>Digital Divide</h3>
        <p>Despite the many benefits of technology in education, there are significant challenges that need to be addressed. One of the most pressing issues is the digital divide. Not all students have equal access to technology, and this disparity can exacerbate existing educational inequalities. Students from low-income families or rural areas may lack the necessary devices or internet connectivity, putting them at a disadvantage.</p>
        <h3>Overreliance on Technology</h3>
        <p>Another challenge is the overreliance on technology. While technology can enhance learning, it should not replace traditional teaching methods. An overemphasis on digital tools can lead to a decline in critical thinking and problem-solving skills. It is essential to strike a balance between technology and traditional teaching to ensure a well-rounded education.</p>
        <h3>Privacy and Security Concerns</h3>
        <p>The increased use of technology in education also raises privacy and security concerns. Schools and educational institutions must ensure that students' personal information is protected from cyber threats. There is also the risk of data breaches and unauthorized access to sensitive information. Implementing robust security measures and educating students about online safety are crucial steps in mitigating these risks.</p>
        <h2>The Future of Technology in Education</h2>
        <h3>Artificial Intelligence and Machine Learning</h3>
        <p>The future of technology in education looks promising, with advancements in artificial intelligence (AI) and machine learning set to play a significant role. AI-powered tools can provide real-time feedback, helping students improve their performance. Machine learning algorithms can analyze vast amounts of data to identify trends and predict students' future performance, enabling more effective interventions.</p>
        <h3>Virtual and Augmented Reality</h3>
        <p>Virtual reality (VR) and augmented reality (AR) are poised to revolutionize the educational experience. VR can transport students to different environments, allowing them to explore historical sites, conduct virtual experiments, and even travel to outer space. AR can overlay digital information onto the real world, enhancing the learning experience by providing additional context and interactivity.</p>
        <h3>Gamification</h3>
        <p>Gamification is another emerging trend in education. By incorporating game elements such as points, badges, and leaderboards into the learning process, educators can motivate and engage students. Gamification makes learning more enjoyable and can improve student retention and performance.</p>
        <h3>Online and Blended Learning</h3>
        <p>The COVID-19 pandemic has accelerated the adoption of online and blended learning models. Online learning platforms and virtual classrooms have become essential tools for delivering instruction remotely. Blended learning, which combines online and in-person instruction, offers flexibility and ensures continuity of education in the face of disruptions.</p>
        <h2>Conclusion</h2>
        <p>In conclusion, technology has had a profound impact on modern education, offering numerous benefits such as enhanced learning experiences, access to information, personalized learning, and improved collaboration. However, challenges such as the digital divide, overreliance on technology, and privacy concerns must be addressed to fully realize its potential. Looking ahead, advancements in AI, VR, AR, gamification, and online learning will continue to shape the future of education, making it more inclusive, engaging, and effective.</p>
      </div>
      <p>Scroll Position: {scrollPosition}px</p>
    </div>
  )
}

export default App;