'use client'
import React from 'react';
import { Tabs } from 'antd';

const Tab_detail: React.FC = () => (
    <Tabs defaultActiveKey="Description" centered>
        <Tabs.TabPane tab="Description" key="Description">
        <div className="w-[900px] my-5 ">
              <div className="w-[900] h-10 mb-[15px] border-b border-zinc-200">
                <p className="w-[120px] h-10 text-gray-600 text-2xl font-bold font-['Inter']">Description</p>
              </div>
              <span className="w-[890px] text-gray-500 text-base font-normal font-['Inter']">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </span>
            </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Post Reviews" key="Post Reviews">
        <div className="w-[900px] my-5">
              <div className="w-[900] h-10 border-b border-zinc-200">
                <p className="w-[120px] h-10 text-gray-600 text-2xl font-bold font-['Inter']">Reviews</p>
              </div>
              <textarea id="review" rows={6} className="block p-2.5 w-[890px] my-[15px] text-sm border-none border-b border-gray-500 bg-zinc-100 focus:bg-white" placeholder="Your Review *"></textarea>
              <button className="w-40 h-10 rounded-[50px] border border-orange-400 text-lime-600 text-sm font-bold font-['Inter'] flex items-center justify-center mt-[10px] ml-[730px]">Post Review</button>
            </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Reviews" key="Reviews">
        <div className="w-[900px] mt-5">
              <div className="w-[900px] h-10 border-b border-zinc-200">
                <p className="w-[120px] h-10 text-gray-600 text-2xl font-bold font-['Inter']">Reviews</p>
              </div>
              <div className="w-[900px] my-[15px] pl-[10px] border border-zinc-200 bg-white rounded-[10px]">
                <div className=" flex justify justify-between">
                  <div className="flex gap-2">
                    <span className="text-black text-base font-normal font-['Inter']">Jess Hopkins</span>
                  </div>
                  <div className="flex p-1 gap-1 text-orange-300">
                  </div>
                </div>
                <span className="text-gray-500 text-base font-normal font-['Inter']">
                  Gorgeous design! Even more responsive than the previous version. A pleasure to use!
                </span>
              </div>
              <div className="w-[900px] my-[15px] pl-[10px] border border-zinc-200 bg-white rounded-[10px]">
                <div className=" flex justify justify-between">
                  <div className="flex gap-2">
                    <span className="text-black text-base font-normal font-['Inter']">Jess Hopkins</span>
                  </div>
                </div>
                <span className="text-gray-500 text-base font-normal font-['Inter']">
                  Gorgeous design! Even more responsive than the previous version. A pleasure to use!
                </span>
              </div>
              <div className="w-[900px] my-[15px] pl-[10px] border border-zinc-200 bg-white rounded-[10px]">
                <div className=" flex justify justify-between">
                  <div className="flex gap-2">
                    <span className="text-black text-base font-normal font-['Inter']">Jess Hopkins</span>
                  </div>
                  <div className="flex p-1 gap-1 text-orange-300">
                  </div>
                </div>
                <span className="text-gray-500 text-base font-normal font-['Inter']">
                  Gorgeous design! Even more responsive than the previous version. A pleasure to use!
                </span>
              </div>
            </div>
        </Tabs.TabPane>
        
     </Tabs>
);

export default Tab_detail;