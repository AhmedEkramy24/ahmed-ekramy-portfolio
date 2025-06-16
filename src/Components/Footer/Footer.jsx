export default function Footer() {
  return (
    <>
      <footer className="p-4 bg-slate-100 border-t border-gray-200">
        <div className="bg-slate-100 text-center p-4">
          <p className="text-gray-700">
            © {new Date().getFullYear()} Ahmed Ekramy. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with <i className="fa-solid fa-heart text-red-500"></i> and
            React
          </p>
        </div>
      </footer>
    </>
  );
}
