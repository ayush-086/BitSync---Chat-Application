import { Laptop, TabletIcon } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1  items-start justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          
            <div
              className="rounded-2xl bg-primary/10 flex items-center
             justify-center "
            >
              <TabletIcon className="w-16 h-16 text-gray-400" />
              <Laptop className="w-20 h-20 text-gray-400" />
            
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold animate-ping">Welcome to BITSYNC!
        </h2>
        <br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        &copy; Team DAAV
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;