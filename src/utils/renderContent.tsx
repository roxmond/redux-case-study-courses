// utils/renderContent.tsx
const renderContent = (contentItem: { type: string; data: string }) => {

    switch (contentItem.type) {

        case 'text':
            return <p className="text-slate-300">{contentItem.data}</p>;
        
        case 'video':
            return (
                <div className="mt-2">
                    <p className="text-slate-300">Video:</p>
                    <video controls className="w-full mt-2 rounded-lg">
                        <source src={contentItem.data} type="video/mp4" />
                    </video>
                </div>
            );
        
        case 'audio':
            return (
                <div className="mt-2">
                    <p className="text-slate-300">Audio:</p>
                    <audio controls className="w-1/2 mt-1">
                        <source src={contentItem.data} type="audio/mpeg" />
                    </audio>
                </div>
            );
        
        case 'podcast':
            return (
                <div className="mt-2">
                    <p className="text-slate-300">Podcast:</p>
                    <audio controls className="w-1/2 mt-1">
                        <source src={contentItem.data} type="audio/mpeg" />
                    </audio>
                </div>
            );
        
        default:
            return <p className="text-slate-300">Unknown content type</p>;
    }
  };

  export default renderContent;